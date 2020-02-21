import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { photoActions } from "../../../actions";
import { handleOnScroll } from "../../../utilities/functions";
import FlickrHeader from "../../components/FlickrHeader/FlickrHeader";
import FlickrPhotos from "../../components/FlickrPhotos/FlickrPhotos";
import FlickrToolbar from "../../components/FlickrToolbar/FlickrToolbar";
import Loader from "../../components/Loader/Loader";

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updating: 0,
      search: {
        method: 1,
        text: this.props.pageID,
        tags: "",
        page: this.props.page || 1
      },
      photos: props.photos
    };
  }

  componentDidMount() {
    this.props.actions.searchPhotos({
      method: 1,
      text: this.props.pageID,
      tags: "",
      page: 1
    });

    window.onscroll = () => {
      if (!this.state.updating) return this.infiniteScroll();
    };

    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.resetInfiniteScroll();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.pageID) {
      this.setState({
        ...this.state,
        search: {
          method: 1,
          text: nextProps.match.params.id,
          tags: "",
          page: 1
        }
      });
      this.props.actions.searchPhotos({
        method: 1,
        text: nextProps.match.params.id,
        tags: "",
        page: 1
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {});
  }

  handleSearch = value => {
    this.props.history.push("/search/" + value);
  };

  infiniteScroll() {
    if (handleOnScroll()) {
      this.setState({ ...this.state, updating: 1 });
      this.props.actions.updatePhotos(this.state.search);
    }
  }

  resetInfiniteScroll() {
    this.setState({ ...this.state, updating: 0 });
  }

  render() {
    const { photos, total } = this.props;

    return (
      <Layout className="main-layout">
        <FlickrHeader />
        <FlickrToolbar
          title={`Photos of ${this.state.search.text}`}
          total={total}
          handleSearch={this.handleSearch}
        />
        <FlickrPhotos photos={photos} />
        <Loader />
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pageID: ownProps.match.params.id,
    result: state.photo,
    page: state.page,
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage,
    photos: state.photos,
    title: state.title,
    total: state.total
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(photoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
