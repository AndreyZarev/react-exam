import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionUs from "./SectionUs";
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("is dom rendered", () => {
    vi.mock("react-router-dom", async (importOriginal) => {
        const actual = await importOriginal()
        return {
            ...actual,

        }
    })


    it("should be visible - Heading ", async () => {


        render(
            <MemoryRouter>
                <SectionUs />
            </MemoryRouter>
        )
        const heading = await screen.findByText("Why Choose Us")
        expect(heading).toBeVisible();


    })


    it("Does it render Register ", async () => {




        render(

            <MemoryRouter>
                <SectionUs />
            </MemoryRouter>
        );

        const register = await screen.findByText('Register');


        expect(register).toBeVisible()

    });
    it("Does it render Login ", async () => {




        render(

            <MemoryRouter>
                <SectionUs />
            </MemoryRouter>
        );

        const login = await screen.findByText('Login');


        expect(login).toBeVisible()

    });



})