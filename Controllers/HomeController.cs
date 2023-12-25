using CountryStateCityBinding.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace CountryStateCityBinding.Controllers
{
    public class HomeController : Controller
    {
        //private readonly HttpClient _httpClient;
        //public HomeController(HttpClient httpClient)
        //{
        //    _httpClient = httpClient; //?? throw new ArgumentNullException(nameof(httpClient));
        //   // _httpClient.BaseAddress = new Uri("http://api.geonames.org/");
        //}

        public IActionResult Index()
        {
            return View();
        }

        //public async Task<List<CountryModel>> GetCountries()
        //{
        //    List<CountryModel> countries = new List<CountryModel>();

        //    try
        //    {
        //        var response = await _httpClient.GetAsync("http://api.geonames.org/"+"countryInfoJSON?username=rachana"); // Replace with your GeoNames username

        //        if (response.IsSuccessStatusCode)
        //        {
        //            var content = await response.Content.ReadAsStringAsync();
        //            var countryInfo = JsonConvert.DeserializeObject<GeoNamesResponse>(content);

        //            countries = countryInfo.geonames.Select(c => new CountryModel
        //            {
        //                Name = c.countryName,
        //                Code = c.countryCode
        //                // Add other properties as needed
        //            }).ToList();
        //        }
        //        else
        //        {
        //            // Handle unsuccessful response
        //            // Example: Log error or throw exception
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        // Handle exceptions
        //        // Example: Log error or throw exception
        //    }

        //    return countries;
        //}

    }
}
