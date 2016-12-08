let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoSearch = require('TodoSearch');


describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call on search with entered input text', () => {
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    let searchText = 'Dog';

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call on search with proper checked value', () => {
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
