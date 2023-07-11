import React from "react";

const Footer = ({ todos }) => {
  return (
    <footer class="container-fluid dark-bg rounded-bottom">
      <div class="row gap-3 p-2">
        <div class="col text-light">
          <span>{todos.filter((item) => item.completed === false).length}</span>{" "}
          items left
        </div>
        <div class="col text-light">
          <div class="row">
            <div class="col">All</div>
            <div class="col">Active</div>
            <div class="col">Completed</div>
          </div>
        </div>
        <div class="col text-light text-center">Clear Completed</div>
      </div>
    </footer>
  );
};

export default Footer;
