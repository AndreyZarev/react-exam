import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Home from "./Home";
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


    it("should be visible - Heading ", async () => {


        render(
            < MemoryRouter >
                <Home />

            </MemoryRouter >
        )
        const heading = await screen.findByText("Neogym")
        expect(heading).toBeVisible();


    })
    it("should be visible check posts button", async () => {



        render(
            < MemoryRouter >
                <Home />

            </MemoryRouter >
        )
        const check = await screen.findByText(`Check Posts`);
        expect(check).toBeInTheDocument();
        expect(check).toBeVisible();

    })

    it("Does it render tainers button", async () => {


        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        const trainers = await screen.findByText('Check Trainers');


        expect(trainers).toBeVisible()

    });


})