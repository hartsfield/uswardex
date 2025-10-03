package main

import (
	"encoding/json"
	"log"
	"os"
)

type viewData struct {
	AppName string
	Country *municipality
}

type municipality struct {
	States      []*municipality `json:"states"`
	Counties    []*municipality `json:"counties"`
	Title       string          `json:"title"`
	Transform   string          `json:"transform"`
	D           string          `json:"d"`
	ID          string          `json:"id"`
	Class       string          `json:"class"`
	Troops      string          `json:"troops"`
	Ambulances  string          `json:"ambulances"`
	Hospitals   string          `json:"hospitals"`
	Helicopters string          `json:"helicopters"`
	Airports    string          `json:"airports"`
	Population  string          `json:"population"`
	Area        string          `json:"area"`
	Density     string          `json:"density"`
	Fill        string          `json:"fill"`
	Stroke      string          `json:"stroke"`
}

var munic *municipality = &municipality{Title: "United States"}

func importFromJSON() {
	b, err := os.ReadFile("./data.json")
	if err != nil {
		log.Println(err)
	}

	err = json.Unmarshal(b, munic)
	if err != nil {
		log.Fatalf("Error unmarshaling JSON: %v", err)
	}
}
