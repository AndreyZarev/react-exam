import { test, expect, it, describe } from "vitest"
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import SectionTrainer from "./SectionTrainer"
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


    it("should be visible - Header ", async () => {


        render(
            < MemoryRouter >
                <SectionTrainer />

            </MemoryRouter >
        )
        const header = await screen.findByText("Our Gym Trainers")
        expect(header).toBeVisible();


    })
    it("should be visible - div element", async () => {



        render(
            < MemoryRouter >
                <SectionTrainer />

            </MemoryRouter >
        )
        const divElement = document.querySelector(`.flex-container`);
        expect(divElement).toBeInTheDocument();
        expect(divElement).toBeVisible();

    })

    it("should have children - div element", async () => {


        const mockTrainers = [
            {
                achievments: "Second place in women bodybuiliding State Championship.",
                experience: "Working as a personal trainer for 2 years. Expertize in woman bodybuiliding.",
                img: "https://example.com/image.jpg",
                liked: "notLiked",
                likes: "0",
                person: "Maya",
                phone: "+1-555-7653",
                users: ['users'],
                _id: "2d5ae478-87c7-45fa-acf9-f04aa4724421"
            }
        ];

        render(
            <MemoryRouter>
                <SectionTrainer trainers={mockTrainers} />
            </MemoryRouter>
        );

        const names = await screen.findByText('Maya');


        expect(names).toBeVisible()
        // const children = flexContainer.children;

        // expect(children).toHaveLength(mockTrainers.length);
    });


})