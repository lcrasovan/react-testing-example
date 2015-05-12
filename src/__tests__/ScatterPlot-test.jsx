
//jest.dontMock('../src/ScatterPlot.jsx');

var React = require('react/addons'),
    ScatterPlot = require('../ScatterPlot.jsx'),
    TestUtils = React.addons.TestUtils,
    expect = require('expect');

var d3 = require('d3');

describe('ScatterPlot', function () {
    var mockData = d3.range(5).map(function () {
        return [d3.random.normal(), d3.random.normal()];
    });

    it("renders an h1", function () {
        var scatterplot = TestUtils.renderIntoDocument(
            <ScatterPlot />
        );

        var h1 = TestUtils.findRenderedDOMComponentWithTag(
            scatterplot, 'h1'
        );

        expect(h1.getDOMNode().textContent).toEqual("This is a scatterplot");
    });

    it("renders an svg with appropriate dimensions", function () {
        var scatterplot = TestUtils.renderIntoDocument(
            <ScatterPlot width="500" height="500" />
        );

        var svg = TestUtils.findRenderedDOMComponentWithTag(
            scatterplot, 'svg'
        );

        expect(svg.getDOMNode().getAttribute("width")).toEqual('500');
        expect(svg.getDOMNode().getAttribute("height")).toEqual('500');
    });

    it("renders a circle for each datapoint", function () {
        var scatterplot = TestUtils.renderIntoDocument(
            <ScatterPlot data={mockData} />
        );

        var circles = TestUtils.scryRenderedDOMComponentsWithTag(
            scatterplot, 'circle'
        );

        expect(circles.length).toEqual(5);
    });
});