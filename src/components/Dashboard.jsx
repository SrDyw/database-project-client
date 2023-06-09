import React, { useContext, useEffect } from "react";
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
import UserForm from "./form/UserForm";
import ReviewForm from "./form/ReviewForm";
import ReviewTable from "./ReviewTable";
import SelectorUpdate from "./SelectorUpdate";
import Action from "./Action";
import {
    changeModeOfServer,
    getServerMode,
    isConnected,
} from "./backend/petitions";
import ProjOperation from "./ProjOperation";
import HighersIndustriesTable from "./HighersIndustriesTable";
import TopGamesTable from "./TopGamesTable";
import BestDeveloperTable from "./BestDeveloperTable";
import WorstReviewTable from "./WorstReviewTable";
import Loading from "./Loading";
import ConectionInfo from "./ConectionInfo";

export default function Dashboard() {
    const { win, setWin, queryData, currTable, auto, setAuto, isLoading } =
        useContext(AppContext);

    let connected = true;

    const changeMode = async () => {
        setAuto(auto === "on" ? "off" : "on");

        await changeModeOfServer(auto);
    };

    const serverMode = async () => {
        return getServerMode();
    };

    useEffect(() => {
        async function TestConnection() {
            let connected;
            try {
                const response = await isConnected();

                if (response.message === "connected") {
                    serverMode().then((response) =>
                        setAuto(response === true ? "on" : "off")
                    );
                }
            } catch (e) {
                setWin('info.con')
            }
        }

        TestConnection();
    }, []);

    if (!connected && win === "start") {
        console.log("sad");
        setWin("info.con");
    }

    // useEffect(async() => {
    //     console.log("Component loaded");
    //     return await serverMode();
    // }, [])

    return (
        <div>
            {currTable === "programmers" ? (
                <Table data={queryData}></Table>
            ) : (
                ""
            )}
            {currTable === "designers" ? (
                <DesgTable data={queryData}></DesgTable>
            ) : (
                ""
            )}
            {currTable === "editors" ? (
                <EditorTable data={queryData}></EditorTable>
            ) : (
                ""
            )}
            {currTable === "leveldesigners" ? (
                <LvlDesTable data={queryData}></LvlDesTable>
            ) : (
                ""
            )}
            {currTable === "games" ? (
                <GameTable data={queryData}></GameTable>
            ) : (
                ""
            )}
            {currTable === "industries" ? (
                <IndustryTable data={queryData}></IndustryTable>
            ) : (
                ""
            )}
            {currTable === "users" ? (
                <UserTable data={queryData}></UserTable>
            ) : (
                ""
            )}
            {currTable === "reviews" ? (
                <ReviewTable data={queryData}></ReviewTable>
            ) : (
                ""
            )}

            {currTable === "higherInd" ? (
                <HighersIndustriesTable
                    data={queryData}
                ></HighersIndustriesTable>
            ) : (
                ""
            )}
            {currTable === "topgames" ? (
                <TopGamesTable data={queryData}></TopGamesTable>
            ) : (
                ""
            )}
            {currTable === "bestdev" ? (
                <BestDeveloperTable data={queryData}></BestDeveloperTable>
            ) : (
                ""
            )}
            {currTable === "wordrev" ? (
                <WorstReviewTable data={queryData}></WorstReviewTable>
            ) : (
                ""
            )}

            <Navbar></Navbar>

            {win === "selector" ? <Selector></Selector> : ""}
            {win === "selector.update" ? <SelectorUpdate></SelectorUpdate> : ""}
            {win === "form.prog" ? <ProgForm></ProgForm> : ""}
            {win === "form.desg" ? <DesgForm></DesgForm> : ""}
            {win === "form.edit" ? <EditForm></EditForm> : ""}
            {win === "form.lvds" ? <LvlDesForm></LvlDesForm> : ""}
            {win === "form.game" ? <GameForm></GameForm> : ""}
            {win === "form.inc" ? <IndustryForm></IndustryForm> : ""}
            {win === "form.user" ? <UserForm></UserForm> : ""}
            {win === "form.revw" ? <ReviewForm></ReviewForm> : ""}

            {win.split(".")[0] === "select" ? <Select></Select> : ""}
            {win === "selector.operation" ? <Action></Action> : ""}

            <h3 className="autog_tag" onClick={() => changeMode()}>
                Autogenerating: {auto === "on" ? "On" : "Off"}
            </h3>
            {win === "selector.projOperation" ? (
                <ProjOperation></ProjOperation>
            ) : (
                ""
            )}
            {isLoading ? <Loading></Loading> : ""}

            {win === "info.con" ? <ConectionInfo></ConectionInfo> : ""}
        </div>
    );
}
