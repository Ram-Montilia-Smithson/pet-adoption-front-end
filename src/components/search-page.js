import React, { useState, useEffect } from "react";
import { Button, Card, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import { getPets } from "../lib/api";
import SearchResults from "./search-results"


export default function Search() {

    // const [allPets, setAllPets] = useState({})
    const [searchedPets, setSearchedPets] = useState([])
    const [searchTypeBasic, setSearchTypeBasic] = useState(true);
    const [searchData, setSearchData] = useState({})
    // const [type, setType] = useState("dogs")

    // const handleBasicSearch = () => {
    //     all
    // }

    useEffect(() => {
        getPets().then((response) => {
            console.log(response, "getPets");
        })
        // return () => {cleanup}
    }, [])
    
    const handleTypeChange = (event) => {
        if (event === 1) { setSearchData({ ...searchData, type: "cat" }) }
        else { setSearchData({ ...searchData, type: "dog" }) }
    };

    const handleStatusChange = (event) => {
        if (event === 1) { setSearchData({ ...searchData, status: "fostered" }) }
        else if (event === 2) { setSearchData({ ...searchData, status: "owned" }) }
        else { setSearchData({ ...searchData, status: "sheltered" }) }
    };

    // const handleAdvancedSearch = (event) => {
    //     event.preventDefault();
    //     let advancedPetArray = []
    //     allPets.forEach((pet) => {
    //         for (const value in searchData) {
    //             for (const prop in pet) {
    //                 if (pet[prop] === searchData && !advancedPetArray.includes(pet))
    //                 { advancedPetArray.push(pet) }
    //             }
    //         }
    //     })
    //     setSearchedPets(advancedPetArray)
    //     console.log(advancedPetArray)
    //     console.log(searchedPets)
    //     setSearchData({ name: "", type: "", height: 0, weight: 0, status: "" })
    // }

    return (
        <>
            <Card className="d-flex align-items-center justify-content-center bg-transparent">
                <Card.Body>
                    <h2 className="text-center mb-4">Search Page</h2>
                    <Form
                        className="bg-light"
                    // onSubmit={(event) => handleAdvancedSearch(event)}
                    >
                        <Button
                            className="d-block m-auto"
                            onClick={() => setSearchTypeBasic(!searchTypeBasic)}
                        >
                            {!searchTypeBasic ? "Basic" : "Advanced"}
                        </Button>
                        Results of search (List of animal card components that link to the pet page)
                        <Card.Title>{searchTypeBasic ? "Basic" : "Advanced"} Search Form:</Card.Title>
                        {searchTypeBasic ?
                            <>
                            <Form.Group id="type">
                                <Form.Label className="d-block m-auto" >Pet's Type</Form.Label>
                                <ToggleButtonGroup
                                    type="radio"
                                    name="types"
                                    // onChange={(event) => handleBasicSearch(event)}
                                >
                                    <ToggleButton value={1}>cat</ToggleButton>
                                    <ToggleButton value={2}>dog</ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>
                            <SearchResults pets = {searchedPets}/>
                            </>
                            :
                            <>
                                <Form.Group id="pet's-Name">
                                    <Form.Label>Pet's Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        onChange={(event) => setSearchData({ ...searchData, name: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group id="type">
                                    <Form.Label>Pet's Type</Form.Label>
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                        onChange={(event) => handleTypeChange(event)}
                                    >
                                        <ToggleButton value={1}>cat</ToggleButton>
                                        <ToggleButton value={2}>dog</ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group id="status">
                                    <Form.Label> Adoption Status</Form.Label><br />
                                    <ToggleButtonGroup
                                        type="radio"
                                        name="types"
                                        onChange={(event) => handleStatusChange(event)}
                                    >
                                        <ToggleButton value={1}>Fostered</ToggleButton>
                                        <ToggleButton value={2}>Owned</ToggleButton>
                                        <ToggleButton value={3}>Sheltered</ToggleButton>
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group id="height">
                                    <Form.Label>Height</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Height"
                                        onChange={(event) => setSearchData({ ...searchData, height: event.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group id="weight">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="weight"
                                        onChange={(event) => setSearchData({ ...searchData, weight: event.target.value })}
                                    />
                                </Form.Group>
                                <Button type="submit">Search</Button>
                            </>
                        }
                    </Form>
                </Card.Body>
            </Card>
            show ten results of pet cards
            {/* {console.log(type)} */}
            <h2 className="text-center mb-4">Search Results</h2>
            
        </>
    );
}