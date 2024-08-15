import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionHealty from "./SectionHealty";
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("is dom rendered", () => {
    // vi.mock("react-router-dom", async (importOriginal) => {
    //     const actual = await importOriginal()
    //     return {
    //         ...actual,

    //     }
    // })


    it("should be visible - heading ", async () => {


        render(
            <SectionHealty />

        )
        const heading = await screen.findByText("Healty Mind, Healty Body!")
        expect(heading).toBeVisible();


    })





})