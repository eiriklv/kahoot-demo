import styled from "styled-components";
import FullHeight from "react-div-100vh";

export const Heading = styled.h1`
  margin: 0;
`;

export const SubHeading = styled.h2`
  text-align: center;
`;

export const GameWrapper = styled(FullHeight)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #0f3ab3;
`;

export const GameHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  border-bottom: 1px solid #25076b;
  background-color: #3c168a;
  color: #fff;
`;

export const GameBoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-grow: 1;
  overflow-y: scroll;
`;

export const GameBoardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% / 4) - (2 * 20px));
  height: 150px;
  margin: 20px;
  background-color: #41c4df;
  color: white;
  border-radius: 10px;
  font-size: 4rem;
`;

export const ScoresWrapper = styled(FullHeight)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ScoresHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  border-bottom: 1px solid #aa142e;
  background-color: #b10824;
  color: #fff;
`;

export const ScoreBoardWrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  background-color: #ffa601;
`;

export const ScoresFooter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  border-top: 1px solid #aa142e;
  font-size: 1.5rem;
  background-color: #c60829;
  color: #fff;

  h3 {
    margin: 0.5rem 1rem 0.5rem 1rem;
  }
`;

export const Table = styled.table`
  position: relative;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 1.2rem;

  th {
    background-color: #fff;
    position: sticky;
    top: 0;
    width: calc(100% / 3);
    font-size: 1.7rem;
  }

  td {
    font-size: 2rem;
  }
`;

export const TableHeaderRow = styled.tr`
  height: 5rem;
`;

export const TableDataRow = styled.tr`
  background-color: #ffc009;
`;

export const ScoreItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  font-size: 3.5rem;
  background-color: #41c4df;
  color: #fff;
  border-radius: 10px;
`;

export const PointsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #aa142e;

  h3 {
    margin: 0.5rem 1.5rem;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Button = styled.button`
  width: 100%;
  margin: 0 1.5rem;
  padding: 2rem;
  font-size: 2rem;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #27890d;
  color: #fff;
`;
