import React, { useState, useContext } from "react";
import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { AllPets } from "../context/context";
import Pet from "./pet";

export default function Search() {

    const allPets = useContext(AllPets)

    // still need adjusting
    
    const [searchedPets, setSearchedPets] = useState(allPets)
    const [searchTypeBasic, setSearchTypeBasic] = useState(true);
    const [searchData, setSearchData] = useState({name:"",height:0,weight:0})

    const handleBasicSearch = (event) => {
        const basicSearchPets = []
        allPets.forEach(pet => { if (pet.type === event) {basicSearchPets.push(pet)}});
        setSearchedPets(basicSearchPets)
    }

    const handleAdvanceSearch = (event) => {
        event.preventDefault()
        const advanceSearchPets = [...allPets]
        advanceSearchPets.forEach(pet => {
            for (const property in pet) {
                for (const searchValue in searchData) {
                    if (searchData[searchValue]) {
                        if (property === searchValue && pet[property] !== searchData[searchValue]) {
                            let i = advanceSearchPets.indexOf(pet)
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
                                    <Form.Label>Pet's Type</Form.Label>
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                        onChange={(event) => setSearchData({ ...searchData, type: event })}
                                    >
                                        <ToggleButton value={"cat"}>cat</ToggleButton>
                                        <ToggleButton value={"dog"}>dog</ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group id="status">
                                    <Form.Label> Adoption Status</Form.Label><br />
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                        onChange={(event) => setSearchData({ ...searchData, status: event })}
                                    >
                                        <ToggleButton value={"Fostered"}>Fostered</ToggleButton>
                                        <ToggleButton value={"Adopted"}>Adopted</ToggleButton>
                                        <ToggleButton value={"Available"}>Available</ToggleButton>
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
                                <Button type="submit">Search</Button>
                            </>
                        }
                    </Form>
                </Card.Body>
            </Card>
            <h2 className="text-center mb-4">Search Results</h2>
            {searchedPets.map(pet => { return (<Pet pet={pet} key={pet._id}/>)})}
        </>
    );
}