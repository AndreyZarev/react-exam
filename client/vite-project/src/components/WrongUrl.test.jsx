import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import WrongUrl from "./WrongUrl";
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("is dom rendered", () => {






    it("Does it render button ", async () => {

        const dummyText = "Test Text"


        render(
            <MemoryRouter>
                <WrongUrl />
            </MemoryRouter>

        );

        const button = await screen.findByText('Return to Home');


        expect(button).toBeVisible()

    });



})