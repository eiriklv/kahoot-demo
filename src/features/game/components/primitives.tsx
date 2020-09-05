import styled from "styled-components";

export const Heading = styled.h1`
  margin: 0;
`;

export const SubHeading = styled.h2`
  text-align: center;
`;

export const GameBoardContainer = styled.div`
  background-color: #0f3ab3;
`;

export const GameBoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-bottom: 1px solid #25076b;
  background-color: #3c168a;
  color: #fff;
`;

export const GameBoardItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-height: calc(100vh - 100px);
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

export const ScoreBoardContainer = styled.div`
  background-color: goldenrod;
`;

export const ScoreBoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-bottom: 1px solid #aa142e;
  background-color: #b10824;
  color: #fff;
`;

export const ScoreBoardItemsContainer = styled.div`
  height: calc(100vh - 100px - 250px);
  overflow-y: scroll;
  background-color: #ffa601;
`;

export const ScoreBoardFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  border-top: 1px solid #aa142e;
  font-size: 1.5rem;
  background-color: #c60829;
  color: #fff;

  h3 {
    margin: 0.5rem 1rem 0.5rem 1rem;
  }
`;

export const ScoreTable = styled.table`
  position: relative;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 1.2rem;
  border-spacing: 0 5px;

  th {
    background-color: #fff;
    position: sticky;
    top: 0;
    font-size: 1.7rem;
  }

  td {
    width: calc(100% / 3);
    font-size: 2rem;
  }
`;

export const ScoreTableHeaderRow = styled.tr`
  height: 100px;
`;

export const ScoreTableDataRow = styled.tr`
  background-color: #ffc009;
`;

export const ScoreTableCell = styled.td``;

export const ScoreItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin: 20px;
  font-size: 3.5rem;
  background-color: #41c4df;
  color: #fff;
  border-radius: 10px;
`;

export const PointsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #aa142e;

  h3 {
    margin: 10px 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Button = styled.button`
  width: 100%;
  margin: 0 20px;
  font-size: 2rem;
  padding: 2rem;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #27890d;
  color: #fff;
`;
