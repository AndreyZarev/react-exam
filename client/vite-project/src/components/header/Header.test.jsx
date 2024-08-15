import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Header from "./Header";
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


    it("should be visible - Home ", async () => {


        render(
            < MemoryRouter >
                <Header />

            </MemoryRouter >
        )
        const home = await screen.findByText("Home")
        expect(home).toBeVisible();


    })
    it("should be visible - Why-Us", async () => {



        render(
            < MemoryRouter >
                <Header />

            </MemoryRouter >
        )
        const whyUs = await screen.findByText(`Why Us`);
        expect(whyUs).toBeInTheDocument();
        expect(whyUs).toBeVisible();

    })

    it("Does it render tainers in div element", async () => {


        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const trainers = await screen.findByText('Trainers');


        expect(trainers).toBeVisible()

    });


})