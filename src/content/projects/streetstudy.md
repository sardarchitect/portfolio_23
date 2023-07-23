---
category: "computer-vision"
title: "StreetStudy"
date: 2023
thumbnail: "/assets/projects/demo.png"
excerpt: "Using object detection and tracking, this app allows urban designers and planners to analyze outdoor pedestrian foot traffic patterns and behaviors in the hopes to optimize public spaces for pedestrian needs. This app aims to provide designers granular insights into creating more pedestrian-friednly, accessible, and sustainable urban areas."
tags: 
    - "computer-vision"
    - "pytorch"
    - "streamlit"
    - "yolov5"
    - "urban planning"
---
# StreetStudy
[Live Demo](https://sardarchitect-ucsd-capstone-app-rhqt1d.streamlit.app/)
[Code](https://github.com/sardarchitect/ucsd_capstone)
![image](/assets/projects/streetstudy_1.png)

## Problem statement
As urban areas become increasingly populated, architects and planners face the challenge of designing spaces that can accommodate high volumes of foot traffic. Furthermore, urban spaces are used in ways usually not intended by the designers. For instance, pedestrians may choose a shortcut through the grass rather than following the paved pathway provided by the designer if it is more efficient. 

By optimizing our environment to behave in ways that are more attuned to pedestrian needs, we can create better public spaces. Moreover, this optimization can allow for more nature to flourish in our cities. For example, by finding patterns in the paths pedestrians take, designers can reduce the need for large slabs of concrete that destroy biodiversity which would have thrived in its place.

The redesign of public spaces with pedestrian needs in mind offers an opportunity to create sustainable, attractive urban areas that promote both biodiversity and human well-being. 

## Objectives
To aid in this effort, I developed a ML-based webapp that allows users to analyze outdoor pedestrian foot traffic patterns, including the number of pedestrians, their direction of movement, and behaviors they are most likely performing. This information can be used by architects and urban planners to design more pedestrian-friendly spaces, with better flow, accessibility, sustainability, and safety. 

## Methodology
I used YOLOv5, a state-of-the-art vision model, to perform object detection and SORT, an online and realtime algorithm to perform object tracking. The model was trained on the VIRAT dataset, a large dataset of surveillance footage in outdoor pedestrian areas, including sidewalks, plazas, and parks, with varying levels of foot traffic and environmental conditions such as weather and time of day. Further cleaning and preprocessing such as resizing, cropping, and normalizing the images were performed to ensure a suitable training dataset for the the computer vision model. 

## Evaluation metrics
Evaluating the pedestrian detection, tracking, and behaviors will be through using straight-forward supervised learning techniques like Average Precision (AP) and mean Average Precision (mAP), which use Intersection over Union (IoU) to measure precision/recall.   