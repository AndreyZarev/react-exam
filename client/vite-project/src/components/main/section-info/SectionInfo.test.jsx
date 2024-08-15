import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionInfo from "./SectionInfo";
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("is dom rendered", () => {
    // vi.mock("react-router-dom", async (importOriginal) => {
    //     const actual = await importOriginal()
    //     return {
    //         ...actual,

    //     }
    // })


    it("should be visible - Location: ", async () => {


        render(
            <SectionInfo />

        )
        const location = await screen.findByText("Location:")
        expect(location).toBeVisible();


    })


    it("Does it render Phone number: ", async () => {




        render(

            <SectionInfo />

        );

        const phone = await screen.findByText('Phone number:');


        expect(phone).toBeVisible()

    });
    it("Does it render Email address:  ", async () => {




        render(

            <SectionInfo />

        );

        const email = await screen.findByText('Email address:');


        expect(email).toBeVisible()

    });


})