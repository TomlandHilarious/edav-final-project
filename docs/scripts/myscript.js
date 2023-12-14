document.addEventListener("DOMContentLoaded", function() {
    // weather
    const weather_injury_data = [
        [66.7, 80, 82.2, 80.6, 81.1, 81.8, 81.1, 82.5, 83.1, 84.1, 96.2, 81.7],
        [20, 9.6, 10, 11.4, 10.3, 9.9, 10.7, 10.4, 8.9,	8.2, 1.9, 8.5],
        [13.3, 9.6,	6.9, 6.9, 7.5, 8, 7.5, 7.1,	6.6, 7.3, 1.6, 8.2],
        [0, 0.9, 0.8, 1, 0.9, 0.3, 0.7,	0, 1.4, 0.3, 0.3, 1.3],
        [0.0, 0.0, 0.1, 0.1, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3]
    ];
    const weather_injury_total = [15,115,115269,17062,640,363,20238,154,213,1432,680,388];
    const weather_severity_data = [
        [0,5.4,3.8,4.1,2.4,3.2,3.2,3.4,1.9,6.8,6.2,5.5],
        [13.3,25.9,27,25.8,17.4,19.9,23.3,23.3,26.3,26.1,44.6,24.6],
        [33.3,24.1,27.1,28.7,26.8,24.9,27,28.8,28.7,29.4,28.5,27],
        [40,39.3,37.4,37.1,45.7,47.2,41.9,39.7,40.2,34.6,17.3,38.2],
        [13.3,5.4,4.6,4.2,7.7,4.7,4.6,4.8,2.9,3.1,3.4,4.7]];
    const weather_severity_total = [15, 112, 110668, 16552, 622, 341, 19612, 146, 209, 1378, 417, 382];
    // speed.limit
    const speed_injury_data = [
        [92.4,95.2,93.9,93.3,89.4,86.2,81.7,81,77.5,76.8,73.7,80.9,78.9,87.9,100,100],
        [4.3,3,3.3,4.1,5.8,7.6,10.2,11,12.6,13.1,13.4,10.9,5.6,3.4,0,0],
        [2.9,1.7,2.7,2.3,4.1,5.6,7.3,7.2,8.6,8.8,10.4,7.1,12.7,6.9,0,0],
        [0.4,0.1,0.2,0.2,0.7,0.5,0.8,0.8,1.1,1.1,1.8,1,1.4,1.7,0,0],
        [0,0,0,0,0.1,0.1,0.1,0,0.1,0.1,0.5,0.1,1.4,0,0,0]
    ];
    const speed_injury_total = [4677,4160,3057,6042,1160,23704,23053,49703,33250,12309,4597,3912,71,58,6,1];
    const speed_severity_data = [
        [9.4,12.6,8.9,8.8,6.6,6.1,3.4,2.8,2,1.8,1.6,1.8,1.4,0,0,0],
        [49.5,50.9,50.4,44.7,29.1,30.7,24,25.1,21,19.9,18.5,23.4,25.4,35.1,16.7,0],
        [27.1,24.9,26.3,27.7,30.6,25.9,27.5,27.8,27.9,27.2,24.1,28.2,31,21.1,16.7,0],
        [13.1,11.1,13.6,17.7,30.9,33.7,40.6,39.6,43.3,44.9,47.2,40.8,38,42.1,50,100],
        [1,0.5,0.8,1,2.8,3.6,4.5,4.6,5.8,6.2,8.6,5.8,4.2,1.8,16.7,0]
    ];
    const speed_severity_total = [4197,3600,2722,5392,1070,22495,22333,48085,32462,12048,4510,3775,71,57,6,1];
    // light
    const light_severity_data = [
        [2.8,3.1,3.1,3,4.1,3.2,4.4,2],
        [29.4,23.7,20.1,21.6,27.8,28.2,31.5,41.6],
        [25.3,24.3,22.3,27,28.5,26.1,26.8,33.2],
        [35.8,42,43.7,42.6,36.1,37.3,34.7,19.5],
        [6.8,6.8,10.9,5.7,3.5,5.2,2.5,3.6]

    ];
    const light_severity_total = [1390,37087,4691,3257,110671,3687,317,394];
    const light_injury_data = [
        [86.3,82.2,80.2,81.7,81.8,82.7,85,98.1],
        [7.6,9.5,10.3,10.2,10.5,9.2,7.9,0.7],
        [5.5,7.3,7.9,7.1,6.8,6.8,6.8,1.2],
        [0.4,0.9,1.1,0.9,0.8,1,0.3,0],
        [0.2,0.1,0.4,0.1,0.1,0.2,0,0]
    ];
    const light_injury_total = [1557,38689,4852,3378,114983,3877,340,671];
    // surface
    const surface_severity_data = [
        [3.3,4.5,2.2,0,4.4,0,6.7,8.9,5.3,5.3,2.8],
        [24.9,18.8,34.8,35.7,27,25,23.2,28,39.9,10.5,21.5],
        [27.4,26.6,21.7,14.3,25.2,25,23.7,26.9,30.2,23.7,27.3],
        [39.5,44,34.8,42.9,35.8,50,40.7,33.4,21.6,47.4,43.3],
        [4.9,6.1,6.5,7.1,7.5,0,5.7,2.7,3,13.2,5.1]
    ];
    const surface_severity_total =[115228,1011,46,28,159,4,194,895,338,38,27150];
    const surface_injury_data = [
        [80.8,80.4,65.2,67.9,80.9,100,76.6,83.1,95.5,74.4,80.2],
        [10.8,11.3,13,14.3,9.9,0,11.9,8.8,1.6,15.4,11.2],
        [7.4,7.2,15.2,17.9,7.4,0,10,7.8,2.6,10.3,7.7],
        [0.9,1,6.5,0,1.9,0,1,0.3,0.4,0,0.8],
        [0.1,0.1,0,0,0,0,0.5,0,0,0,0.1]
    ];
    const surface_injury_total = [119048,1032,46,28,162,4,201,936,506,39,27886];
    // traffic
    const traffic_severity_data = [
        [0.8,3.9,6.5,12,7.7,6.7,3.2,3.3,2.4,2,4.6],
        [10.9,27.9,29.1,32.6,30.8,33.3,18,24.4,50.7,25.7,33],
        [16.5,27.5,28,30,30.8,13.3,27.5,27.1,31.2,28.3,34.6],
        [60.4,35.9,32,22.8,15.4,40,47.5,40.6,15.1,36.2,26.3],
        [11.4,4.6,4.4,2.6,15.4,6.7,3.8,4.6,0.5,7.9,1.4]
    ];
    const traffic_severity_total = [2064,64470,1901,267,39,15,12044,56358,205,152,1671];
    const traffic_injury_data = [
        [73.9,83.7,82.2,90,90.7,87.5,79.9,79.1,97.9,83.1,80.7],
        [13.1,9,10.8,7.1,7,6.2,11.3,12.1,1.1,8.4,11.9],
        [10.8,6.4,6.1,2.8,2.3,6.2,8,7.9,1.1,5.8,7],
        [1.8,0.9,0.9,0,0,0,0.7,0.8,0,1.9,0.5],
        [0.4,0.1,0.1,0,0,0,0.1,0.1,0,0.6,0]
    ];
    const traffic_injury_total = [2094,67659,1974,281,43,16,12307,58078,281,154,1711];
    // maps
    const weatherConditionMap = {
        "BLOWING SAND, SOIL, DIRT": 0,
        "BLOWING SNOW": 1,
        "CLEAR": 2,
        "CLOUDY": 3,
        "FOGGY": 4,
        "OTHER": 5,
        "RAINING": 6,
        "SEVERE WINDS": 7,
        "SLEET": 8,
        "SNOW": 9,
        "UNKNOWN": 10,
        "WINTRY MIX": 11
      };
    const lightConditionMap = {
        "DARK -- UNKNOWN LIGHTING": 0,
        "DARK LIGHTS ON": 1,
        "DARK NO LIGHTS": 2,
        "DAWN": 3,
        "DAYLIGHT": 4,
        "DUSK": 5,
        "OTHER": 6,
        "UNKNOWN": 7
    };
    const speedConditionMap = {
        "0": 0,
        "5": 1,
        "10": 2,
        "15": 3,
        "20": 4,
        "25": 5,
        "30": 6,
        "35": 7,
        "40": 8,
        "45": 9,
        "50": 10,
        "55": 11,
        "60": 12,
        "65": 13,
        "70": 14,
        "75": 15

    }
    const injurySeverityMap = {
        0: "NO APPARENT INJURY",
        1: "POSSIBLE INJURY",
        2: "SUSPECTED MINOR INJURY",
        3: "SUSPECTED SERIOUS INJURY",
        4: "FATAL INJURY"
    };
    const damageExtentMap = {
        0: "NO DAMAGE",
        1: "SUPERFICIAL",
        2: "FUNCTIONAL",
        3: "DISABLING",
        4: "DESTROYED"

    };
    const surfaceConditonMap = {
        "DRY": 0,
        "ICE": 1,
        "MUD, DIRT, GRAVEL": 2,
        "OIL": 3,
        "OTHER": 4,
        "SAND": 5,
        "SLUSH": 6,
        "SNOW": 7,
        "UNKNOWN": 8,
        "WATER(STANDING/MOVING)": 9,
        "WET": 10
    };
    const trafficConditionMap = {
        "FLASHING TRAFFIC SIGNAL": 0,
        "NO CONTROLS": 1,
        "OTHER": 2,
        "PERSON": 3,
        "RAILWAY CROSSING DEVICE": 4,
        "SCHOOL ZONE SIGN DEVICE": 5,
        "STOP SIGN": 6,
        "TRAFFIC SIGNAL": 7,
        "UNKNOWN": 8,
        "WARNING SIGN": 9,
        "YIELD SIGN": 10

    }
    var dependentDropdown = d3.select("#dependentDropdown");
    var independentDropdown = d3.select("#independentDropdown");



    independentDropdown.on("change", update_button);

    dependentDropdown.on("change", function() {
        var selectedValue = dependentDropdown.property("value");
        console.log("Selected value:", selectedValue);
    });

    // levels for each variable
    function update_button() {
        const weather = ["BLOWING SAND, SOIL, DIRT", "BLOWING SNOW", "CLEAR",
        "CLOUDY", "FOGGY", "OTHER", "RAINING",
        "SEVERE WINDS", "SLEET", "SNOW", "WINTRY MIX"];
        const speed = ["0","5","10","15","20","25","30","35","40","45","50","55","60","65","70","75"];
        const surface_condition = ["DRY", "WET", "UNKNOWN", "WATER(STANDING/MOVING)",
            "MUD, DIRT, GRAVEL", "OTHER", "ICE","SLUSH", "SNOW", "OIL", "SAND"];
        const light = ["DAYLIGHT", "DARK LIGHTS ON", "DUSK", "DARK -- UNKNOWN LIGHTING", "DAWN", "OTHER", "DARK NO LIGHTS", "UNKNOWN"];
        const traffic_control = ["TRAFFIC SIGNAL", "NO CONTROLS", "OTHER", "STOP SIGN", "FLASHING TRAFFIC SIGNAL", "WARNING SIGN",
            "UNKNOWN", "YIELD SIGN", "PERSON" , "SCHOOL ZONE SIGN DEVICE", "RAILWAY CROSSING DEVICE"];
        const injury_level = ["NO APPARENT INJURY", "POSSIBLE INJURY",
        "SUSPECTED MINOR INJURY",
        "SUSPECTED SERIOUS INJURY", "FATAL INJURY"];
        const severity_level = ["UNKNOWN", "OTHER", "NO DAMAGE", "SUPERFICIAL", "FUNCTIONAL", "DISABLING", "DESTROYED"];
        var selectedIndependent = independentDropdown.property("value");

        var chosenIndependentOptions = [];
        if (selectedIndependent === "Weather") {
            chosenIndependentOptions = weather;
        } else if (selectedIndependent === "Speed.Limit") {
            chosenIndependentOptions = speed;
        } else if (selectedIndependent === "Surface.Condition") {
            chosenIndependentOptions = surface_condition;
        } else if (selectedIndependent === "Light") {
            chosenIndependentOptions = light;
        } else if (selectedIndependent === "Traffic.Control") {
            chosenIndependentOptions = traffic_control;
        }

        var chosenIndependent = d3.select("#chosenindependent");
        chosenIndependent.selectAll("option").remove();
        chosenIndependent.selectAll("option")
            .data(chosenIndependentOptions)
            .enter().append("option")
            .text(d => d)
            .attr("value", d => d);
        var chosenIndependent = d3.select("#chosendependent");
        chosenIndependent.selectAll("option").remove();
        chosenIndependent.selectAll("option")
            .data(chosenIndependentOptions)
            .enter().append("option")
            .text(d => d)
            .attr("value", d => d);;

       // level_2.on("change", update_graph_right(level_2.property("value"), independent, dependent));
    };
    //
    var level_1 = d3.select("#chosenindependent");
    var level_2 = d3.select("#chosendependent");
    console.log(level_1)
    var independent = independentDropdown.property("value");
    var dependent = dependentDropdown.property("value")

    level_1.on("change", function() {
        var independent = independentDropdown.property("value");
        var dependent = dependentDropdown.property("value");
        var selectedValue = level_1.property("value");
        update_graph_left(selectedValue, independent, dependent);
    });
    level_2.on("change", function() {
        var independent = independentDropdown.property("value");
        var dependent = dependentDropdown.property("value");
        var selectedValue = level_2.property("value");
        update_graph_right(selectedValue, independent, dependent);

    });

    function get_data(level, independent, dependent) {
        const dataMap = {
            "Weather": {
                "Injury.Severity": weather_injury_data,
                "Vehicle.Damage.Extent": weather_severity_data
            },
            "Speed.Limit": {
                "Injury.Severity": speed_injury_data,
                "Vehicle.Damage.Extent": speed_severity_data
            },
            "Light": {
                "Injury.Severity": light_injury_data,
                "Vehicle.Damage.Extent": light_severity_data
            },
            "Surface.Condition": {
                "Injury.Severity": surface_injury_data,
                "Vehicle.Damage.Extent": surface_severity_data
            },
            "Traffic.Control": {
                "Injury.Severity": traffic_injury_data,
                "Vehicle.Damage.Extent": traffic_severity_data
            }
        };

        // Retrieve the data based on independent and dependent variables
        const Data = dataMap[independent][dependent];
        var col_idx;
        if (independent === "Weather") {
            console.log(level);
            console.log(weatherConditionMap);
            col_idx = weatherConditionMap[level];
            totalCount = (dependent === "Injury.Severity") ? weather_injury_total[col_idx] : weather_severity_total[col_idx];
        } else if (independent === "Speed.Limit") {
            col_idx = speedConditionMap[level];
            totalCount = (dependent === "Injury.Severity") ? speed_injury_total[col_idx] : speed_severity_total[col_idx];
        } else if (independent === "Light") {
            col_idx = lightConditionMap[level];
            totalCount = (dependent === "Injury.Severity") ? light_injury_total[col_idx] : light_severity_total[col_idx];

        } else if (independent === "Surface.Condition") {
            col_idx = surfaceConditonMap[level];
            totalCount = (dependent === "Injury.Severity") ? surface_injury_total[col_idx] : surface_severity_total[col_idx];
        } else if (independent === "Traffic.Control") {
            col_idx = trafficConditionMap[level];
            totalCount = (dependent === "Injury.Severity") ? traffic_injury_total[col_idx] : traffic_severity_total[col_idx];
        }
        var selectedData = [];
        if (dependent === "Injury.Severity") {
            selectedData = Data.map((d, index) => ({
                level: injurySeverityMap[index],  // Replace with the injuryseverity
                value: d[col_idx]
            }));
        } else if (dependent === "Vehicle.Damage.Extent") {
            selectedData = Data.map((d, index) => ({
                level: damageExtentMap[index],  // Replace with vehicledamage
                value: d[col_idx]
            }));
        }
        console.log(selectedData);

        // Return the selected data
        return {
            selectedData: selectedData,
            totalCount: totalCount
        };

    };

    function update_graph_left(level, independent, dependent) {
        // Shared settings for both graphs
        d3.select("#leftGraph").selectAll("svg").remove();
        const w = 750;
        const h = 300;

        const margin = { top: 25, right: 25, bottom: 25, left: 25 };
        const innerWidth = w - margin.left - margin.right;
        const innerHeight = h - margin.top - margin.bottom;
        const { selectedData: bardata, totalCount } = get_data(level, independent, dependent);


        // const bardata = [
        //     { month: "Jan", value: 300 },
        //     { month: "Feb", value: 100 },
        //     { month: "Mar", value: 150 },
        //     { month: "Apr", value: 220 },
        //     { month: "May", value: 70 },
        //     { month: "Jun", value: 270 }
        // ];

        // Create scales and axes
        const xScale = d3.scaleBand()
            .domain(bardata.map(d => d.level))
            .range([0, innerWidth])
            .paddingInner(0.1);

        const yScale = d3.scaleLinear()
             .domain([0, 100])
            .range([innerHeight, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        function createBarGraph(containerId) {
            const svg = d3.select(`#${containerId}`)
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Background rectangle
            svg.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", w)
                .attr("height", h)
                .attr("fill", "white");

            // Bars
            const bars = svg.append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)
                .selectAll("rect")
                .data(bardata);

            bars.enter().append("rect")
                .attr("x", d => xScale(d.level))
                .attr("y", d => yScale(d.value))
                .attr("width", xScale.bandwidth())
                .attr("height", d => innerHeight - yScale(d.value))
                .attr("fill", "lightblue")
                .on("mouseover", handleMouseOver)  // Add mouseover event
                .on("mouseout", handleMouseOut); ;

            // Axes
            svg.append("g")
                .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
                .call(xAxis)
                .selectAll("text") // Select all text elements of x-axis

            svg.append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)
                .call(yAxis);


            svg.append("text")
                .attr("x", innerWidth)  // Position at the right of the graph
                .attr("y", margin.top)  // Position at the top of the graph
                .attr("text-anchor", "end")  // Anchor text at the end for right alignment
                .attr("fill", "black")  // Text color
                .text(`Total Count: ${totalCount}`);
            function handleMouseOver(e, d) {
                const bar = d3.select(this);
                d3.select(this)
                    .attr("fill", "orange");  // Change the color to orange on mouseover

                    // Print the data for the hovered bar
                svg.append("text")
                    .attr("class", "hover-text")
                    .attr("x", +bar.attr("x") + xScale.bandwidth() / 2)  // Use the center of the bar
                    .attr("y", +bar.attr("y") + 5)  // Move the text slightly above the bar
                    .text(`${d.value} %`);
                }

                // Function to handle mouseout event
            function handleMouseOut(d, i) {
                    d3.select(this)
                        .attr("fill", "lightblue");  // Change the color back to lightblue on mouseout
                    svg.selectAll(".hover-text").remove();
                }

        };

        // Function to create a bar graph in a specified container

        // Create bar graphs in both left and right containers
        createBarGraph("leftGraph");

    }
    function update_graph_right(level, independent, dependent) {
        // Shared settings for both graphs
        d3.select("#rightGraph").selectAll("svg").remove();
        const w = 750;
        const h = 300;

        const margin = { top: 25, right: 25, bottom: 25, left: 25 };
        const innerWidth = w - margin.left - margin.right;
        const innerHeight = h - margin.top - margin.bottom;
        const { selectedData: bardata, totalCount } = get_data(level, independent, dependent);
        // Create scales and axes
        const xScale = d3.scaleBand()
            .domain(bardata.map(d => d.level))
            .range([0, innerWidth])
            .paddingInner(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([innerHeight, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        function createBarGraph(containerId) {
            const svg = d3.select(`#${containerId}`)
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Background rectangle
            svg.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", w)
                .attr("height", h)
                .attr("fill", "white");

            // Bars
            const bars = svg.append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)
                .selectAll("rect")
                .data(bardata);

            bars.enter().append("rect")
                .attr("x", d => xScale(d.level))
                .attr("y", d => yScale(d.value))
                .attr("width", xScale.bandwidth())
                .attr("height", d => innerHeight - yScale(d.value))
                .attr("fill", "lightblue")
                .on("mouseover", handleMouseOver)  // Add mouseover event
                .on("mouseout", handleMouseOut); ;

            // Axes
            svg.append("g")
                .attr("transform", `translate(${margin.left}, ${h - margin.bottom})`)
                .call(xAxis);

            svg.append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`)
                .call(yAxis);
            svg.append("text")
                .attr("x", innerWidth)  // Position at the right of the graph
                .attr("y", margin.top)  // Position at the top of the graph
                .attr("text-anchor", "end")  // Anchor text at the end for right alignment
                .attr("fill", "black")  // Text color
                .text(`Total Count: ${totalCount}`);
            function handleMouseOver(e, d) {
                    const bar = d3.select(this);
                    d3.select(this)
                        .attr("fill", "orange");  // Change the color to orange on mouseover

                    // Print the data for the hovered bar
                    svg.append("text")
                    .attr("class", "hover-text")
                    .attr("x", +bar.attr("x") + xScale.bandwidth() / 2)  // Use the center of the bar
                    .attr("y", +bar.attr("y") + 5)  // Move the text slightly above the bar
                    .text(`${d.value} %`);
                }

                // Function to handle mouseout event
            function handleMouseOut(d, i) {
                    d3.select(this)
                        .attr("fill", "lightblue");  // Change the color back to lightblue on mouseout
                    svg.selectAll(".hover-text").remove();
                }

        };

        // Create bar graphs in both left and right containers
        createBarGraph("rightGraph");

    }


});
