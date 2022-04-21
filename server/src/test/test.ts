let mongoose = require("mongoose");
let chaii = require("chai");
let PostModel = require("../models/Post");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chaii.should();

//During the test the env variable is set to test
process.env.NODE_ENV = "test";
//dev dependencies
chaii.use(chaiHttp);
describe("Posts", () => {
  beforeEach((done) => {
    PostModel.remove({}, (err: any) => {
      done();
    });
  });
});

describe("/GET posts", () => {
  it("it should GET all the posts", (done) => {
    chaii
      .request(server)
      .get("/api/posts/all")
      .end((err: any, res: any) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
