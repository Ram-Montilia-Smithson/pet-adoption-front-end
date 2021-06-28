import React, { useState, useEffect } from "react";
import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { getPets } from "../lib/api";
import Pet from "./pet-card";

// the search is still no good

export default function Search() {

    const [searchTypeBasic, setSearchTypeBasic] = useState(true);
    const [searchedPets, setSearchedPets] = useState([])
    const [searchData, setSearchData] = useState({ name: "", height: 0, weight: 0, type: ""})
    const [pets, setPets] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        getAllPets()
    }, [])

    const getAllPets = async () => {
        const pets = await getPets()
        if (typeof pets === "string") setError(pets)
        else if (typeof pets === "object") {
            setError("")
            setPets(pets)
        }
    }
    
    const handleBasicSearch = (petType) => {
        const basicSearchPets = []
        pets.forEach(pet => { if (pet.type === petType) {basicSearchPets.push(pet)}});
        setSearchedPets(basicSearchPets)
    }

    const handleAdvanceSearch = (event) => {
        event.preventDefault()
        const advanceSearchPets = [...pets]
        advanceSearchPets.forEach(pet => {
            let i = advanceSearchPets.indexOf(pet)
            for (const searchValue in searchData) {
                for (const property in pet) {
                    if (searchData[searchValue]) {
                        if (property === searchValue && pet[property] !== searchData[searchValue]) {
                            advanceSearchPets.splice(i, 1)
                        }
                    }
                }
            }
        })
        setSearchedPets(advanceSearchPets)
        setSearchData({ name: "", height: 0, weight: 0 })
    }

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Search Page</h2>
                    <Form
                        className="bg-light"
                        onSubmit={(event) => handleAdvanceSearch(event)}
                    >
                        <Button
                            className="d-block m-auto"
                            onClick={() => setSearchTypeBasic(!searchTypeBasic)}
                        >
                            {!searchTypeBasic ? "Basic Search" : "Advance Search"}
                        </Button>
                        Results of search (List of animal card components that link to the pet page)
                        <Card.Title>{searchTypeBasic ? "Basic " : "Advance "} Search Form:</Card.Title>
                        {searchTypeBasic ?
                            <>
                                <Form.Group id="type">
                                    <Form.Label className="d-block m-auto" >Type of pet</Form.Label>
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                        onChange={(event) => handleBasicSearch(event)}
                                    >
                                        <ToggleButton value={"cat"}>cat</ToggleButton>
                                        <ToggleButton value={"dog"}>dog</ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <div className="my-2 bg-warning rounded text-danger border border-primary">{error}</div>
                            </>
                            :
                            <>
                                <Form.Group id="pet's-Name">
                                    <Form.Label>Pet's Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        onChange={(event) => setSearchData({ ...searchData, name: event.target.value })}
                                        value={searchData.name}
                                    />
                                </Form.Group>
                                <Form.Group id="type">
                                    <Form.Label className="d-block">Type Of Pet</Form.Label>
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                    >
                                        <ToggleButton onChange={() => setSearchData({ ...searchData, type: "cat" })}>
                                            cat
                                        </ToggleButton>
                                        <ToggleButton onChange={() => setSearchData({ ...searchData, type: "dog" })}>
                                            dog
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group id="status">
                                    <Form.Label> Adoption Status</Form.Label><br />
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                    >
                                        <ToggleButton onChange={() => setSearchData({ ...searchData, status: "fostered" })}>
                                            Fostered
                                        </ToggleButton>
                                        <ToggleButton onChange={() => setSearchData({ ...searchData, status: "Adopted" })}>
                                            Adopted
                                        </ToggleButton>
                                        <ToggleButton onChange={() => setSearchData({ ...searchData, status: "Available" })}>
                                            Available
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group id="height">
                                    <Form.Label>Height</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Height"
                                        onChange={(event) => setSearchData({ ...searchData, height: event.target.value })}
                                        value={searchData.height}
                                    />
                                </Form.Group>
                                <Form.Group id="weight">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="weight"
                                        onChange={(event) => setSearchData({ ...searchData, weight: event.target.value })}
                                        value={searchData.weight}
                                    />
                                </Form.Group>
                                <div className="my-2 bg-warning rounded text-danger border border-primary">{error}</div>
                                <Button type="submit">Search</Button>
                            </>
                        }
                    </Form>
                </Card.Body>
            </Card>
            <h2 className="text-center mb-4">Search Results</h2>
            {searchedPets && searchedPets.map(pet => { return (<Pet pet={pet} key={pet._id} />) })}
        </>
    );
}