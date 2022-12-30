import Navbar from "../../components/Navbar";

export default function defCreate() {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="header">Create</h1>
        <div className="cards">
          <a href="/create/community">
            <div className="card">
              <img src="/icons/1.png" className="card-img"></img>
              <h2 className="card-head">Community</h2>
              <p className="card-desc">
                Your School, Your Office, Your Neighbourhood, etc.
              </p>
            </div>
          </a>

          <a href="/create/goss">
            <div className="card">
              <img src="/icons/2.png" className="card-img"></img>
              <h2 className="card-head">Goss</h2>
              <p className="card-desc">
                Simple gossip on a certain community/topic.
              </p>
            </div>
          </a>
        </div>
      </div>

      <style>
        {`
        .header {
            font-weight : 600;
            font-size : 5em;
            text-align : center;
            margin-top : 0px;
            margin-bottom : 0px;
        }

        .cards {
            margin-top : 10px;
            display : flex;
            flex-wrap : wrap;
            justify-content : center;
            align-items : center;
        }

        .card {
            height : 300px;
            width : 300px;
            margin-right : 50px;
            padding-left : 10px;
            display : flex;
            flex-direction : column;
            align-items : center;
            cursor : pointer;
            transition : all 100ms ease;
            scale : 1;
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        }

        .card:hover {
            scale: 1.05;
        }

        .card-head {
            text-align : center;
            font-size : 2em;
            margin-top : 0px;
            margin-bottom : 0px;
        }

        .card-desc {
            margin-top : 10px;
        }

        .card-img {
            width : 170px;
            height : 170px;
        }
        `}
      </style>
    </>
  );
}
