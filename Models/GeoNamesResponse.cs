namespace CountryStateCityBinding.Models
{
    public class GeoNamesResponse
    {
        public List<CountryInfo> geonames { get; set; }
    }

    public class CountryInfo
    {
        public string countryName { get; set; }
        public string countryCode { get; set; }
        // Other properties as needed
    }
}
