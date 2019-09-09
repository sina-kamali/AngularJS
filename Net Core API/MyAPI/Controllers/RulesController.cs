using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyAPI.Controllers
{
    [Route("api/[controller]")]
    public class RulesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public JsonResult Get()
        {
            

            List<String> str = new List<string>();
            str.Add("Must be 5 characters");
            str.Add("Must not be used elsewhere");
            str.Add("Must be cool");
            return Json(str);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        
    }
}
