import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Post, { getServerSideProps } from "../../pages/posts/[slug]";
import { getPrismicClient } from "../../services/prismic";
import { getSession } from "next-auth/client";

const post = {
  slug: "my-new-post",
  title: "my-new-post",
  content: "<p>post excerpt</p>",
  updatedAt: "10 de abril",
};

jest.mock("next-auth/client");
jest.mock("../../service/prismic");

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Post post={post} />);

    expect(screen.getByText("my-new-post")).toBeInTheDocument();
    expect(screen.getByText("post excerpt")).toBeInTheDocument();
  });

  it("redirects user ig no subscription is found", async () => {
    const getSessionMocked = mocked(getSession);
    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: "my-new-post",
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/",
        }),
      })
    );
  });

  it("load initial data", async () => {
    const getSessionMocked = mocked(getSession);
    const getPrimiscClientMocked = mocked(getPrismicClient);
    getPrimiscClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: "heading", text: "My new post" }],
          content: [{ type: "paragraph", text: "Post excerpt" }],
        },
        last_publication_date: "04-01-2021",
      }),
    } as any);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: "fake-active-subscription",
    } as any);

    const response = await getServerSideProps({
      params: {
        slug: "my-new-post",
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: "my-new-post",
            title: "my-new-post",
            content: "<p>post excerpt</p>",
            updatedAt: "01 de abril de 2021"
          }
        }
      })
    );
  });
});
