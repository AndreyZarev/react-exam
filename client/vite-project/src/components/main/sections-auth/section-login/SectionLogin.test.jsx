import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionLogin from "./SectionLogin";
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
                <SectionLogin />
            </MemoryRouter>
        )
        const heading = await screen.findByText("Login Form")
        expect(heading).toBeVisible();


    })



    it("Does it render button ", async () => {

        const dummyText = "Test Text"


        render(

            <MemoryRouter>
                <SectionLogin />
            </MemoryRouter>
        );

        const button = await screen.findByText('Send');


        expect(button).toBeVisible()

    });



})