using CoffeeTracker.WebAPI.Models;
using CoffeeTracker.WebAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeTracker.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CoffeeLogsController : ControllerBase
{
  private readonly ICoffeeLogsRepository _coffeeLogsRepository;
  public CoffeeLogsController(ICoffeeLogsRepository coffeeLogsRepository)
  {
    _coffeeLogsRepository = coffeeLogsRepository;
  }

  [HttpGet]
  public async Task<ActionResult<IEnumerable<CoffeeLog>>> GetCoffeeLogs()
  {
    IEnumerable<CoffeeLog> logs = await _coffeeLogsRepository.GetAllAsync();
    if (logs == null) return NotFound();
    return Ok(logs);
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<CoffeeLog?>> GetCoffeeLogById(int id)
  {
    CoffeeLog? log = await _coffeeLogsRepository.GetByIdAsync(id);
    if (log == null) return NotFound();
    return Ok(log);
  }

  [HttpPost]
  public async Task<ActionResult> AddCoffeeLog(CoffeeLog log)
  {
    await _coffeeLogsRepository.AddAsync(log);
    return CreatedAtAction(nameof(AddCoffeeLog), log);
  }

  [HttpPut("{id}")]
  public async Task<ActionResult> UpdateCoffeeLog(int id, CoffeeLog log)
  {
    if (log.Id != id) return NotFound();
    if (log == null) return BadRequest();

    await _coffeeLogsRepository.UpdateAsync(log);
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult> DeleteCoffeeLog(int id)
  {
    CoffeeLog? log = await _coffeeLogsRepository.GetByIdAsync(id);
    if (log == null) return NotFound();
    await _coffeeLogsRepository.DeleteAsync(log);
    return NoContent();
  }
}

