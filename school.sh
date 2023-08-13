#!/bin/bash

echo "please enter your name"
read name

echo "Hello $name, please enter your age"
read age

if [ "$age" -lt 4]
then
        echo "$name, You are underage"

elif [ "$age" -lt 6]
then
        echo "$name, You will be joining nursary"

elif [ "$age" -lt 10]
then
        echo "$name, You will be joining Lower Primary School"


elif [ "$age" -lt 13]
then
        echo "$name, You will be joining Heigher Primary School"

elif [ "$age" -lt 16]
then
        echo "$name, You will be joining High School"

elif [ "$age" -lt 18]
then
        echo "$name, You will be Pre-University college"

else
        echo "$name, You are not qualified"

fi