import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App2 from "./App2";

describe("App2 component", () => {
    test("Render magnificent monkeys", () => {
        const { container } = render(<App2 />);
        expect(container).toMatchSnapshot();
    });
    test("render radical rhinos after button click", async () => {
        const user = userEvent.setup();
        render(<App2 />);
        const button = screen.getByRole("button", { name: "Click Me" });
        await act(async () => {
            await user.click(button);
        });
        expect(screen.getByRole("heading").textContent).toMatch(
            /radical rhinos/i
        );
    });
});
