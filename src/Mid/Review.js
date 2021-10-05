import axios from "axios";
import { Component } from "react";
import ReactStars from "react-rating-stars-component";

class Review extends Component {
  state = {
    moviename: "",
    review: "",
    stars: 0,
    reviewTitle: "",
    reviews: [],
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  componentDidMount() {
      axios.get("http://localhost:90/movie/single/" + this.state.id)
      .then((res) => {
        this.setState({
          moviename: res.data.moviename
        })
      })
      this.getReview();
      this.getDate();
  }

  reviewText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  reviewButton = (e) => {
    e.preventDefault();
    const reviewData = {
      reviewTitle: this.state.reviewTitle,
      review: this.state.review,
      stars: this.state.stars,
    };

    // reviewData.append("review", this.state.review);
    axios
      .post(
        "http://localhost:90/movies/review/" + this.state.id,
        reviewData,
        this.state.config
      )
      .then((result) => {
        console.log(result);
        // window.location.reload(true);
        this.getReview();
      })
      .catch();
  };

  getReview() {
    axios
      .get("http://localhost:90/movies/review/" + this.state.id)
      .then((res) => {
        this.setState({
          reviews: res.data.data,
        });
        console.log(res.data.data);
      });
  }

  getDate() {
    this.setState({
      date: new Date().toLocaleString(),
    });
  }
  ratingChanged(newRating) {
    console.log(newRating,"nischal2");
  }

  render() {
    const ratingChanged = (newRating) => {
      this.setState({
        stars: newRating,
      });
    };

    return (
      <>
        {/* <div className="hero common-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-ct">
                  <h1>Movie Review </h1>
                  <ul className="breadcumb">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span className="ion-ios-arrow-right"></span> movie review
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="hero mv-single-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="page-single movie-single movie_single">
            <div className="container">
              <div className="row ipad-width2">
                <div className="movie-single-ct main-content">
                  <div className="movie-tabs">
                    <div className="tabs">
                      <div className="tab-content">
                        <div id="reviews" className="tab active">
                          <div className="row blog-detail-ct">
                            <div className="col-md-10 col-sm-12 col-xs-12">
                              <div className="rv-hd">
                                <div className="div">
                                  <h3>Related Movies To</h3>
                                  <h2>{this.state.moviename}</h2>
                                </div>
                                <a href="#userReview" className="redbtn">
                                  Write Review
                                </a>
                              </div>
                              <div className="topbar-filter">
                                <p>
                                  Found <span>56 reviews</span> in total
                                </p>
                                <label>Filter by:</label>
                                <select>
                                  <option value="popularity">
                                    Popularity Descending
                                  </option>
                                  <option value="popularity">
                                    Popularity Ascending
                                  </option>
                                  <option value="rating">
                                    Rating Descending
                                  </option>
                                  <option value="rating">
                                    Rating Ascending
                                  </option>
                                  <option value="date">
                                    Release date Descending
                                  </option>
                                  <option value="date">
                                    Release date Ascending
                                  </option>
                                </select>
                              </div>
                              {this.state.reviews.map((movieReview) => {
                                return (
                                  <div className="mv-user-review-item">
                                    <div className="user-infor">
                                      <img
                                        src={
                                          "http://localhost:90/" +
                                          movieReview.user.profile_pic
                                        }
                                        alt=""
                                      />
                                      <div>
                                        <h3>{movieReview.reviewTitle}</h3>
                                        <div className="no-star">
                                          <ReactStars
                                            edit={false}
                                            count={10}
                                            value={movieReview.stars}
                                            size={24}
                                            activeColor="#ffd700"
                                          />
                                        </div>
                                        <p className="time">
                                          {movieReview.date.substring(0, 10)}
                                          <a href="#">
                                            {movieReview.user.username}
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                    <p>{movieReview.review}</p>
                                  </div>
                                );
                              })}
                              <div className="topbar-filter">
                                <label>Reviews per page:</label>
                                <select>
                                  <option value="range">5 Reviews</option>
                                  <option value="saab">10 Reviews</option>
                                </select>
                                <div className="pagination2">
                                  <span>Page 1 of 6:</span>
                                  <a className="active" href="#">
                                    1
                                  </a>
                                  <a href="#">2</a>
                                  <a href="#">3</a>
                                  <a href="#">4</a>
                                  <a href="#">5</a>
                                  <a href="#">6</a>
                                  <a href="#">
                                    {" "}
                                    <i className="ion-arrow-right-b"></i>{" "}
                                  </a>
                                </div>
                              </div>
                              <div id="userReview" className="comment-form">
                                <h4>Leave your review</h4>
                                <form action="#">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <input
                                        type="text"
                                        name="reviewTitle"
                                        placeholder="Review Title"
                                        onChange={this.reviewText}
                                        value={this.state.reviewTitle}
                                      />
                                    </div>
                                    <ReactStars
                                      count={10}
                                      onChange={ratingChanged}
                                      size={24}
                                      activeColor="#ffd700"
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-md-10">
                                      <textarea
                                        name="review"
                                        placeholder="Write your review here..."
                                        onChange={this.reviewText}
                                        value={this.state.review}
                                      />
                                    </div>
                                  </div>
                                  <input
                                    className="submit"
                                    type="submit"
                                    placeholder="submit"
                                    value="Submit review"
                                    onClick={this.reviewButton}
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Review;
