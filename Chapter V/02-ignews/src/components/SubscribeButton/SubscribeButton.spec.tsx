import { render, screen, fireEvent } from "@testing-library/react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { SubscribesButton } from ".";
import { mocked } from "ts-jest/utils";

jest.mock("next-auth/client");

jest.mock("next/router");

describe("SubscribesButton Component", () => {
  it("renders correctly", () => {
    const userSessionMocked = mocked(useSession);

    userSessionMocked.mockReturnValueOnce([null, false]);
    render(<SubscribesButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("redirects user to sign in when not authenticated", () => {
    const userSessionMocked = mocked(useSession);

    userSessionMocked.mockReturnValueOnce([null, false]);
    const signMocked = mocked(signIn);

    render(<SubscribesButton />);

    const subscribeButton = screen.getByText("Subscribe Now");
    fireEvent.click(subscribeButton);

    expect(signMocked).toHaveBeenCalled();
  });

  it("redirects to posts when user already has a subscription", () => {
    const userRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
        },
        activeSubscription: "fake-active-subscription",
        expires: "fake-expires",
      },
      false,
    ]);

    userRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<SubscribesButton />);

    const subscribeButton = screen.getByText("Subscribe Now");
    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith('/posts');
  });
});
