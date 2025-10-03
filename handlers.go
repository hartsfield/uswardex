package main

import (
	"net/http"
)

func root(w http.ResponseWriter, r *http.Request) {
	exeTmpl(w, r, &viewData{
		Country: munic,
	}, "main.html")
}
