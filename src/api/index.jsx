import React from 'react'
import axios from 'axios'

const API_URL = 'https://rickandmortyapi.com/api/';

export const getCharacters = async (params) => {
    const {page, search} = params
    const response = await axios.get(API_URL + `character?page=${page}&name=${search}`);
    return response.data;
}

export const getLocations = async (params) => {
    const {page, search} = params
    const response = await axios.get(API_URL + `location?page=${page}&name=${search}`);
    return response.data
}

export const getLocationsNames = async () => {
    const response = await axios.get(API_URL + `location`);
    return response.data.results
}

export const getEpisodes = async (params) => {
    const {page, search} = params
    const response = await axios.get(API_URL + `episode?page=${page}&name=${search}`);
    return response.data
}

export const randomEp = async (episode) => {
    if(episode){
        const randomNumber = Math.floor(Math.random() * episode.length);
        const response = await axios.get(episode[randomNumber])
        return response.data
    }
}

export const getAllLocations = () => {}
export const getAllEpisodes = () => {}
