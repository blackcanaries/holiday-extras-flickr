import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { photoActions } from "../../../actions";
import { handleOnScroll } from "../../../utilities/functions";
import FlickrHeader from "../../components/FlickrHeader/FlickrHeader";
import FlickrPhotos from "../../components/FlickrPhotos/FlickrPhotos";
import FlickrToolbar from "../../components/FlickrToolbar/FlickrToolbar";
import Loader from "../../components/Loader/Loader";
import "../../components/Loader/Loader.scss";

class RecentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updating: 0,
      search: {
        method: 0,
        text: "",
        tags: "",
        page: props.page || 1
      },
      photos: props.photos
    };
  }

  infiniteScroll() {
    if (handleOnScroll()) {
      this.setState({ ...this.state, updating: 1 });
      this.props.actions.updatePhotos(this.state.search);
    }
  }

  resetInfiniteScroll() {
    this.setState({ ...this.state, updating: 0 });
  }

  componentDidMount() {
    this.props.actions.searchPhotos();
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
      this.props.actions.searchPhotos();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {});
    this.setState({ ...this.state, updating: 1 });
  }

  handleSearch = value => {
    this.props.history.push("/search/" + value);
  };

  render() {
    const { photos, title, total } = this.props;

    return (
      <Layout className="main-layout">
        <FlickrHeader />
        <FlickrToolbar
          title={title}
          total={total}
          handleSearch={this.handleSearch}
        />
        <FlickrPhotos photos={photos} />
        <Loader />
      </Layout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    page: state.page,
    photos: state.photos,
    title: state.title,
    total: state.total
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(photoActions, dispatch)
  };
}

RecentPage.propTypes = {
  // propName: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentPage);
