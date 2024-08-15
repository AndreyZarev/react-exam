import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import TrainerDetails from "./TrainerDetails"
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("is dom rendered", () => {
    vi.mock("react-router-dom", async (importOriginal) => {
        const actual = await importOriginal()
        return {
            ...actual,
            // your mocked methods
        }
    })


    it("should be visible header", async () => {
        render(
            < MemoryRouter >
                <TrainerDetails />

            </MemoryRouter >
        )
        const header = screen.getByText('One of our Gym Trainers')

        expect(header).toBeVisible();
    })

    it("should be visible button", async () => {
        render(
            < MemoryRouter >
                <TrainerDetails />

            </MemoryRouter >
        )
        const likeBtn = await screen.findByText("Like")


        userEvent.click(likeBtn)





        expect(likeBtn).toBeVisible();
    })


})