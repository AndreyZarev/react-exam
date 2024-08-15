import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionUsArticle from "./SectionUsArticle";
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

        const title = "Test Title"
        render(
            <MemoryRouter>
                <SectionUsArticle title={title} />
            </MemoryRouter>
        )
        const heading = await screen.findByText("Test Title")
        expect(heading).toBeVisible();


    })



    it("Does it render text ", async () => {

        const dummyText = "Test Text"


        render(

            <MemoryRouter>
                <SectionUsArticle text={dummyText} />
            </MemoryRouter>
        );

        const text = await screen.findByText('Test Text');


        expect(text).toBeVisible()

    });



})