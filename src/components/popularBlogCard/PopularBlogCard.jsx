import "./PopularBlogCard.css";
import InterActions from "../InterActions/InterActions";

const PopularBlogCard = ({ item }) => {
  return (
    <div className="HJ_popularBlog">
      <div className="container_custom">
        <div className="HJ_CardBlog">
          <div className="HJ_CardBlog_image ">
            <img src={item.img} alt="Popular Blog" className="object-fit-cover" />
          </div>

          <div className="HJ_CardBlog_body">
            <h3 className="title_CardBlog  text-absolute-White">
              {item.title}
            </h3>
            <p className="desc_blog text-gray-60">{item.overview}</p>
            <div className="HJ_FeaturesBlog">
              <div>
                <h6 className="sub_title-125 text-gray-60">Category</h6>
                <p className="sub_title-125 text-absolute-White">
                  {item.category}
                </p>
              </div>
              <div>
                <h6 className="sub_title-125 text-gray-60">Publication Date</h6>
                <p className="sub_title-125 text-absolute-White">
                  {item.pubDate}
                </p>
              </div>
              <div>
                <h6 className="sub_title-125 text-gray-60">Author</h6>
                <p className="sub_title-125 text-absolute-White">
                  {item.author}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-start ">
              <div className="HJ_space_iconsCard">
                <InterActions
                  hideComment
                  likes={item.Likes}
                  shares={item.shares}
                />
              </div>
              <buttton className="HJ_buttonCard  sub_title-125 text-gray-60">Read More</buttton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBlogCard;
