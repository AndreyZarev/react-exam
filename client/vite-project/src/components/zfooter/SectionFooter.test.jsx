import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionFooter from "./SectionFooter";
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("is dom rendered", () => {
    vi.mock("react-router-dom", async (importOriginal) => {
        const actual = await importOriginal()
        return {
            ...actual,

        }
    })





    it("Does it render CopyRight ", async () => {

        const dummyText = "Test Text"


        render(

            <SectionFooter />
        );

        const button = await screen.findByText('© 2024 React Project All Rights Reserved.');


        expect(button).toBeVisible()

    });



})