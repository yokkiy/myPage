require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get blog" do
    get posts_blog_url
    assert_response :success
  end

end
