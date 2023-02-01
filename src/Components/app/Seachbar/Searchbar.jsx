/*******************************************************************************
* serchbar and result  using semantic-ui-react and axios api call
* Contributors: Abhishek Kuamr Yadav
*******************************************************************************/
import React, { useState, useEffect } from "react";
import Helpbar from "./help"
import { Button, Container } from 'semantic-ui-react';
import PDFReader from '../Download/PDFReader';
import axios from 'axios';
// import pdficon from "../../assests/Images/pdficon.png"

function Serachbar() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");



    useEffect(() => {
        loadUsersData();
    }, [])
    const loadUsersData = async () => {
        return await axios.get(`http://localhost:8983/solr/pathfinder/select?indent=true&q.op=OR&q=*%3A*&rows=64`)
            .then((response) => {
                setAPIData(response.data.response.docs)
                // .catch((err) => console.log(err));
            })
    }
    // http://localhost:8983/solr/pathfinder/select?indent=true&q.op=OR&q=title%3A${searchInput}%20AND%20para%3A${searchInput}
    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios.get(`http://localhost:8983/solr/pathfinder/select?indent=true&q.op=OR&q=title%3A${searchInput}%20OR%20para%3A${searchInput}`)
            .then((response) => {
                // console.log(response.data.response.docs);
                setAPIData(response.data.response.docs);
                setSearchInput("");
            })
        //  .catch((err) => console.log(err));
    }
    return (
        <>
            <div>
                <Container id="Search-container" >
                    <input id="searchInput" type="text" placeholder="Search here..." className="search" value={searchInput} onChange={(event) => {
                        setSearchInput(event.target.value);
                    }} />
                    <Button className="primary" onClick={handleSearch} >Search</Button>
                    {/* <Button className="primary">Search</Button> */}
                    <Helpbar />
                    <Button className="my-epc" primary>MYEPC</Button>
                </Container>
            </div>
            <Container id='result-filter'>
                <div className="main-conatiner">
                    {searchInput.length > 1 ? (
                        filteredResults.map((item) => {
                            return (
                                <div className="id-result" key={item.id}>
                                    <div id="heading-result">
                                        <h2 key={item.id} className="heder-result">{item.title}</h2>
                                         {/* <img id="pdficon" src={pdficon} alt="download pdf" height="20px" /> */}
                                         
                                    </div>
                                    <hr className="hr-result" />
                                       
                                    <p className="para-result" key={item.id}>{item.para}</p>
                                </div>
                            )
                        })

                    ) : (
                        APIData.map((item) => {
                            return (

                                <div className="id-result" key={item.id}>
                                    <div id="heading-result">
                                        <h2 key={item.id} className="heder-result">{item.title}</h2>
                                        {/* <img id="pdficon" src={pdficon} alt="download pdf" height="20px" /> */}
                                        <Button className="download-button"><PDFReader/></Button> 
                                    </div>
                                    <hr className="hr-result" />
                                    <p  className="para-result" key={item.id}>{item.para}</p>                                </div>
                                
                            )

                        })
                    )}

                </div>
            </Container>
            <div>
                <Container id="filter-primary">
                    <h2 className="filter-header">Filter by Title</h2>
                </Container>
                <Container id="filter-second">
                    <div id="filter-mainresult">
                        {searchInput.length > 1 ? (
                            filteredResults.map((item) => {
                                return (
                                    <div className="id-result" key={item.id}>
                                        <div id="heading-result">
                                            <h2 key={item.id} className="heder-result">{item.title}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            APIData.map((item) => {
                                return (
                                    <div className="id-result" key={item.id}>
                                        <div id="heading-result">
                                            <h2 key={item.id} className="heder-result">{item.title}</h2>
                                        </div>
                                    </div>
                                )

                            })
                        )}


                    </div>

                </Container>
            </div>
        </>
    )
}
export default Serachbar;