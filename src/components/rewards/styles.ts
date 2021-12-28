import styled from "styled-components";

export const Container = styled.div`
  max-width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;

  h2 {
    color: #484848;
    font-weight: 800;
    font-size: 34px;
    margin: 15px 0;
  }

  > p {
    text-align: center;
    color: #8e8e8e;
    width: 90%;
    font-size: 20px;
  }

  h3 {
    color: #484848;
    font-weight: 800;
    font-size: 22px;
    margin: 15px 0;
  }

  .image {
    width: 75vw;
    img {
      width: 100%;
    }
  }

  .progress_bar_container {
    width: 75vw;
  }

  .chests {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & :nth-child(5) {
      .reward_info {
        left: -105px;
        width: 250px;
      }
    }
  }

  button {
    background-color: #9ac74b;
    color: #ffffff;
    font-weight: 800;
    font-size: 22px;
    border-radius: 20px;
    padding: 14px 40px;
    margin: 40px 0;
  }
`;
