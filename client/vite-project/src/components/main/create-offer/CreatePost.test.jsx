import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CreatePost from "./CreatePost";
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


    it("should be visible - heading ", async () => {


        render(
            < MemoryRouter >
                <CreatePost />

            </MemoryRouter >
        )
        const heading = await screen.findByText("Create Post")
        expect(heading).toBeVisible();


    })


    it("Does it render Send button ", async () => {




        render(
            <MemoryRouter>
                <CreatePost />
            </MemoryRouter>
        );

        const button = await screen.findByText('Send');


        expect(button).toBeVisible()

    });


})