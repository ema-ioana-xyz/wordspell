using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/cuvinte")]
    public class CuvinteController : Controller
    {
        [HttpGet]
        public IActionResult GetCuvinte()
        {
            try
            {
                string json = System.IO.File.ReadAllText("cuvinte.json");
                var cuvinte = JsonConvert.DeserializeObject<List<Cuvinte>>(json);
                return Ok(cuvinte);
            }
            catch (FileNotFoundException)
            {
                return NotFound("Fișierul nu a fost găsit.");
            }
            catch (JsonException)
            {
                return StatusCode(500, "Eroare la deserializare JSON.");
            }
        }
    }
}
