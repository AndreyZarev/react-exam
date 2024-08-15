import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Trainers from "./Trainers"
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


    it("should be visible Name ", async () => {

        const dummyName = 'Asen'
        render(
            < MemoryRouter >
                <Trainers person={dummyName} />

            </MemoryRouter >
        )
        const name = await screen.findByText("Asen")
        expect(name).toBeVisible();


    })
    it("should be visible Register button", async () => {
        render(
            < MemoryRouter >
                <Trainers />

            </MemoryRouter >
        )
        const registerBtn = await screen.findByText("Register")
        expect(registerBtn).toBeVisible();


    })

    it("should be visible Login button", async () => {
        render(
            < MemoryRouter >
                <Trainers />

            </MemoryRouter >
        )




        const loginBtn = await screen.findByText("Login");




        expect(loginBtn).toBeVisible();
    })


})