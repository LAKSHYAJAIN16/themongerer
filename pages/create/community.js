import Navbar from "../../components/Navbar";

export default function CommunityCreate() {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="a-head">Community Create</h1>

        <input placeholder="Enter Community Name" className="a-input"></input>
      </div>

      <style jsx>
        {`
          .content {
            margin-top: 0px;
          }

          .a-head {
            text-align: center;
            font-weight: 500;
            font-size: 4em;
            margin-top: 0px;
            margin-bottom: 0px;
          }

          .a-desc {
            text-align: center;
            margin-top: -5px;
          }

          .a-input {
            resize: none;
            width: 40%;
            height: 30px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top : 10px;
            font-family: var(--mainfont);
            font-size: 1em;
            text-align : center;
          }
        `}
      </style>
    </>
  );
}
