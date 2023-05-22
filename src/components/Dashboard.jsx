import React, { useContext } from "react";
import Navbar from "./Navbar";
import Selector from "./Selector";
import { AppContext } from "./AppContext";
import ProgForm from "./form/ProgForm";
import DesgForm from "./form/DesgForm";
import EditForm from "./form/EditForm";
import LvlDesForm from "./form/LvlDesForm";
import GameForm from "./form/GameForm";
import IndustryForm from "./form/IndustryForm";
import Select from "./Select";
import Table from "./Table";
import DesgTable from "./DesgTable";
import EditorTable from "./EditorTable";
import LvlDesTable from "./LvlDesTable";
import GameTable from "./GameTable";
import IndustryTable from "./IndustryTable";
import UserTable from "./UserTable";

export default function Dashboard() {
    const { win, setWin, queryData, currTable } = useContext(AppContext);

    return (
        <div>
            <Navbar></Navbar>
            {currTable === 'programmers' ? <Table data = {queryData}></Table> : ''}
            {currTable === 'designers' ? <DesgTable data = {queryData}></DesgTable> : ''}
            {currTable === 'editors' ? <EditorTable data = {queryData}></EditorTable> : ''}
            {currTable === 'leveldesigners' ? <LvlDesTable data = {queryData}></LvlDesTable> : ''}
            {currTable === 'games' ? <GameTable data = {queryData}></GameTable> : ''}
            {currTable === 'industries' ? <IndustryTable data = {queryData}></IndustryTable> : ''}
            {currTable === 'users' ? <UserTable data = {queryData}></UserTable> : ''}

            {win === "selector" ? <Selector></Selector> : ""}
            {win === "form.prog" ? <ProgForm></ProgForm> : ""}
            {win === "form.desg" ? <DesgForm></DesgForm> : ""}
            {win === "form.edit" ? <EditForm></EditForm> : ""}
            {win === "form.lvds" ? <LvlDesForm></LvlDesForm> : ""}
            {win === "form.game" ? <GameForm></GameForm> : ""}
            {win === "form.inc" ? <IndustryForm></IndustryForm> : ""}
            {win.split('.')[0] === "select" ? <Select></Select> : ""}
        </div>
    );
}