// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function addAgeClicked () {
  // this function does area 

  // input
  const aBase = parseInt(document.getElementById('a-base-of-trapezoid').value)
  const bBase = parseInt(document.getElementById('b-base-of-trapezoid').value)
  const height = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const area = [(aBase + bBase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + " mm²"
}