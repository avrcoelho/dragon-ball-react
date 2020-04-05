import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0 10px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 22px;
`;

export const PlanetContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border: solid 1px #453e50;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding: 10px 10px;

  @media (max-width: 470px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Data = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-color: #26222d;
  object-fit: cover;
  object-position: top;
  margin-bottom: 10px;

  @media (max-width: 470px) {
    width: 100%;
    height: 300px;
  }
`;

export const Name = styled.span`
  color: #fff;
`;

export const ResidentContainer = styled.div`
  flex: 1;
  border-left: solid 1px #453e50;
  margin-left: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 470px) {
    width: 100%;
    border-left: none;
    border-top: solid 1px #453e50;
    align-items: center;
    margin-top: 10px;
    padding-left: 0;
    padding-top: 10px;
    margin-left: 0;
  }
`;

export const ResidentTitle = styled.h3`
  color: #fff;
  font-size: 16px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 15px;
`;

export const Item = styled.li`
  color: #fff;
  font-size: 14px;
  width: 100%;
  height: 30px;

  @media (max-width: 470px) {
    text-align: center;
  }
`;
