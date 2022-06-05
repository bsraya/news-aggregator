package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

type Get struct {
	Logger *log.Logger
}

func NewGetHandler(logger *log.Logger) *Get {
	return &Get{logger}
}

type Article struct {
	TypeOf                 string      `json:"type_of"`
	ID                     int         `json:"id"`
	Title                  string      `json:"title"`
	Description            string      `json:"description"`
	ReadablePublishDate    string      `json:"readable_publish_date"`
	Slug                   string      `json:"slug"`
	Path                   string      `json:"path"`
	URL                    string      `json:"url"`
	CommentsCount          int         `json:"comments_count"`
	PublicReactionsCount   int         `json:"public_reactions_count"`
	CollectionID           interface{} `json:"collection_id"`
	PublishedTimestamp     time.Time   `json:"published_timestamp"`
	PositiveReactionsCount int         `json:"positive_reactions_count"`
	CoverImage             string      `json:"cover_image"`
	SocialImage            string      `json:"social_image"`
	CanonicalURL           string      `json:"canonical_url"`
	CreatedAt              time.Time   `json:"created_at"`
	EditedAt               interface{} `json:"edited_at"`
	CrosspostedAt          interface{} `json:"crossposted_at"`
	PublishedAt            time.Time   `json:"published_at"`
	LastCommentAt          time.Time   `json:"last_comment_at"`
	ReadingTimeMinutes     int         `json:"reading_time_minutes"`
	TagList                []string    `json:"tag_list"`
	Tags                   string      `json:"tags"`
	User                   struct {
		Name            string      `json:"name"`
		Username        string      `json:"username"`
		TwitterUsername interface{} `json:"twitter_username"`
		GithubUsername  string      `json:"github_username"`
		WebsiteURL      interface{} `json:"website_url"`
		ProfileImage    string      `json:"profile_image"`
		ProfileImage90  string      `json:"profile_image_90"`
	} `json:"user"`
}

type Articles []Article

func (get *Get) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	get.Logger.Println("Received GET request")
	w.WriteHeader(http.StatusOK)

	url := "https://dev.to/api/articles?tag=" + r.URL.Query().Get("tag")
	// send a request to "url" and get a response
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}
	defer resp.Body.Close()

	// send "resp" in json to client
	articles := Articles{}
	err = json.NewDecoder(resp.Body).Decode(&articles)
	if err != nil {
		fmt.Println(err)
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(articles)
}

// // unmarshal the response body into a struct
// var articles Articles
// err = json.Unmarshal(body, &articles)
// if err != nil {
// 	fmt.Println(err)
// }

// // print the response body
// fmt.Println(articles)

// // send articles as json to the client
// w.Header().Set("Content-Type", "application/json")
// json.NewEncoder(w).Encode(articles)
