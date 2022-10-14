require "application_system_test_case"

class AnimesTest < ApplicationSystemTestCase
  setup do
    @anime = animes(:one)
  end

  test "visiting the index" do
    visit animes_url
    assert_selector "h1", text: "Animes"
  end

  test "creating a Anime" do
    visit animes_url
    click_on "New Anime"

    fill_in "Anime image", with: @anime.anime_image
    fill_in "Anime title", with: @anime.anime_title
    fill_in "Api", with: @anime.api_id
    fill_in "Episode count", with: @anime.episode_count
    fill_in "Genre", with: @anime.genre
    fill_in "Mal", with: @anime.mal_id
    fill_in "Score", with: @anime.score
    fill_in "Status", with: @anime.status
    fill_in "Synopsis", with: @anime.synopsis
    click_on "Create Anime"

    assert_text "Anime was successfully created"
    click_on "Back"
  end

  test "updating a Anime" do
    visit animes_url
    click_on "Edit", match: :first

    fill_in "Anime image", with: @anime.anime_image
    fill_in "Anime title", with: @anime.anime_title
    fill_in "Api", with: @anime.api_id
    fill_in "Episode count", with: @anime.episode_count
    fill_in "Genre", with: @anime.genre
    fill_in "Mal", with: @anime.mal_id
    fill_in "Score", with: @anime.score
    fill_in "Status", with: @anime.status
    fill_in "Synopsis", with: @anime.synopsis
    click_on "Update Anime"

    assert_text "Anime was successfully updated"
    click_on "Back"
  end

  test "destroying a Anime" do
    visit animes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Anime was successfully destroyed"
  end
end
