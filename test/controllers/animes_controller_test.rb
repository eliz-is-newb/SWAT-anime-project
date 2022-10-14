require "test_helper"

class AnimesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @anime = animes(:one)
  end

  test "should get index" do
    get animes_url
    assert_response :success
  end

  test "should get new" do
    get new_anime_url
    assert_response :success
  end

  test "should create anime" do
    assert_difference('Anime.count') do
      post animes_url, params: { anime: { anime_image: @anime.anime_image, anime_title: @anime.anime_title, api_id: @anime.api_id, episode_count: @anime.episode_count, genre: @anime.genre, mal_id: @anime.mal_id, score: @anime.score, status: @anime.status, synopsis: @anime.synopsis } }
    end

    assert_redirected_to anime_url(Anime.last)
  end

  test "should show anime" do
    get anime_url(@anime)
    assert_response :success
  end

  test "should get edit" do
    get edit_anime_url(@anime)
    assert_response :success
  end

  test "should update anime" do
    patch anime_url(@anime), params: { anime: { anime_image: @anime.anime_image, anime_title: @anime.anime_title, api_id: @anime.api_id, episode_count: @anime.episode_count, genre: @anime.genre, mal_id: @anime.mal_id, score: @anime.score, status: @anime.status, synopsis: @anime.synopsis } }
    assert_redirected_to anime_url(@anime)
  end

  test "should destroy anime" do
    assert_difference('Anime.count', -1) do
      delete anime_url(@anime)
    end

    assert_redirected_to animes_url
  end
end
