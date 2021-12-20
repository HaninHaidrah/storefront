import React from "react";
import { connect } from "react-redux";
import { display } from "../store/catogry";
import { Breadcrumbs, Link } from "@mui/material";

function Catogries(props) {
  return (
    <section>
      <Breadcrumbs>
        <Link onClick={() => props.display("E")}>
         Electronics
        </Link>
        <Link onClick={() => props.display("A")}>
         Acceccories
        </Link>
      </Breadcrumbs>
    </section>
  );
}

const mapStateToProps = (state) => ({
  catogries: state.catogries,
});
const mapDispatchToProps = { display };

export default connect(mapStateToProps, mapDispatchToProps)(Catogries);
